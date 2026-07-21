<?php

namespace App\Http\Controllers;

use App\Models\ClientRegistration;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ClientRegistrationController extends Controller
{
    public function index(Request $request)
    {
        $query = ClientRegistration::query();

        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        $registrations = $query->latest()->get();

        return response()->json([
            'registrations' => $registrations
        ]);
    }

    public function reject($id)
    {
        $registration = ClientRegistration::findOrFail($id);
        $registration->update(['status' => 'rejected']);

        return response()->json(['message' => 'Registration rejected']);
    }

    public function convertToClient(Request $request, $id)
    {
        $registration = ClientRegistration::findOrFail($id);

        if ($registration->status !== 'pending') {
            return response()->json(['error' => 'Registration already processed'], 400);
        }

        // Create User (client)
        $user = User::create([
            'name' => $registration->primary_contact,
            'email' => $registration->contact_email,
            'password' => Hash::make(Str::random(16)), // passwordless-ish for now
            'role' => 'client',
            'company_name' => $registration->company_name,
            'address' => $registration->address,
            'gstin' => $registration->gstin,
            'contact_phone' => $registration->contact_phone,
            'billing_mode' => $registration->billing_mode,
            // Add other client fields as needed
        ]);

        // Mark registration as converted
        $registration->update([
            'status' => 'converted',
            'converted_user_id' => $user->id
        ]);

        return response()->json([
            'message' => 'Client created successfully',
            'user' => $user
        ]);
    }

    // Public registration endpoint (should replace or wrap the old /api/clients/register)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'company_name' => 'required|string|max:255',
            'address' => 'required|string',
            'gstin' => 'required|string|unique:client_registrations',
            'primary_contact' => 'required|string',
            'contact_phone' => 'nullable|string',
            'contact_email' => 'required|email|unique:client_registrations',
            'billing_mode' => 'nullable|string',
            'agreed_checks' => 'nullable|array',
            'notes' => 'nullable|string',
        ]);

        $registration = ClientRegistration::create($validated);

        return response()->json([
            'message' => 'Registration submitted successfully. Awaiting admin approval.',
            'registration' => $registration
        ], 201);
    }
}