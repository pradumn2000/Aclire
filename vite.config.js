// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.jsx',
                
//             ],
//             refresh: true,
//         }),
//         react(),
//     ],
// });
// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: [
//                 'resources/css/app.css',
//                 'resources/js/app.jsx'
//             ],
//             refresh: true,
//         }),
//         react(),
//     ],
//     build: {
//         outDir: 'public/build',
//         manifest: true,     // Important
//     },
//     base: '/',              // Important
// });

// import { defineConfig } from "vite";
// import laravel from "laravel-vite-plugin";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: [
//                 "resources/css/app.css",
//                 "resources/js/app.jsx",
//             ],
//             refresh: true,
//         }),
//         react(),
//     ],
//     build: {
//         manifest: "manifest.json",
//         outDir: "public/build",
//     },
// });

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
});