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
                .'|/controls/([^/]++)(?'
                    .'|(*:28)'
                    .'|/img(?'
                        .'|(*:42)'
                        .'|/([^/]++)(*:58)'
                    .')'
                .')'
                .'|/api(?'
                    .'|(?:/(index)(?:\\.([^/]++))?)?(*:102)'
                    .'|/(?'
                        .'|docs(?:\\.([^/]++))?(*:133)'
                        .'|contexts/(.+)(?:\\.([^/]++))?(*:169)'
                    .')'
                .')'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:207)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        28 => [[['_route' => 'controls', '_controller' => 'App\\Controller\\ControlsController::datecode_file'], ['datecode'], null, null, false, true, null]],
        42 => [[['_route' => 'controls_img', '_controller' => 'App\\Controller\\ControlsController::datecode_info'], ['datecode'], null, null, true, false, null]],
        58 => [[['_route' => 'controls_img_', '_controller' => 'App\\Controller\\ControlsController::datecode_img'], ['datecode', 'number'], null, null, false, true, null]],
        102 => [[['_route' => 'api_entrypoint', '_controller' => 'api_platform.action.entrypoint', '_format' => '', '_api_respond' => 'true', 'index' => 'index'], ['index', '_format'], null, null, false, true, null]],
        133 => [[['_route' => 'api_doc', '_controller' => 'api_platform.action.documentation', '_format' => '', '_api_respond' => 'true'], ['_format'], null, null, false, true, null]],
        169 => [[['_route' => 'api_jsonld_context', '_controller' => 'api_platform.jsonld.action.context', '_format' => 'jsonld', '_api_respond' => 'true'], ['shortName', '_format'], null, null, false, true, null]],
        207 => [
            [['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
