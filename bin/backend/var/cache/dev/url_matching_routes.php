<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/controls/([^/]++)(*:25)'
                .'|/api(?'
                    .'|(?:/(index)(?:\\.([^/]++))?)?(*:67)'
                    .'|/(?'
                        .'|docs(?:\\.([^/]++))?(*:97)'
                        .'|contexts/(.+)(?:\\.([^/]++))?(*:132)'
                    .')'
                .')'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:170)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        25 => [[['_route' => 'controls', '_controller' => 'App\\Controller\\ControlsController::index'], ['datecode'], null, null, false, true, null]],
        67 => [[['_route' => 'api_entrypoint', '_controller' => 'api_platform.action.entrypoint', '_format' => '', '_api_respond' => 'true', 'index' => 'index'], ['index', '_format'], null, null, false, true, null]],
        97 => [[['_route' => 'api_doc', '_controller' => 'api_platform.action.documentation', '_format' => '', '_api_respond' => 'true'], ['_format'], null, null, false, true, null]],
        132 => [[['_route' => 'api_jsonld_context', '_controller' => 'api_platform.jsonld.action.context', '_format' => 'jsonld', '_api_respond' => 'true'], ['shortName', '_format'], null, null, false, true, null]],
        170 => [
            [['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
