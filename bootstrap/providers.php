<?php

use App\Providers\AppServiceProvider;


return [
    App\Providers\AppServiceProvider::class,
    Sichikawa\LaravelSendgridDriver\SendgridTransportServiceProvider::class,
];
