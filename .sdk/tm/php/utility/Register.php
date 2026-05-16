<?php
declare(strict_types=1);

// Transport SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

TransportUtility::setRegistrar(function (TransportUtility $u): void {
    $u->clean = [TransportClean::class, 'call'];
    $u->done = [TransportDone::class, 'call'];
    $u->make_error = [TransportMakeError::class, 'call'];
    $u->feature_add = [TransportFeatureAdd::class, 'call'];
    $u->feature_hook = [TransportFeatureHook::class, 'call'];
    $u->feature_init = [TransportFeatureInit::class, 'call'];
    $u->fetcher = [TransportFetcher::class, 'call'];
    $u->make_fetch_def = [TransportMakeFetchDef::class, 'call'];
    $u->make_context = [TransportMakeContext::class, 'call'];
    $u->make_options = [TransportMakeOptions::class, 'call'];
    $u->make_request = [TransportMakeRequest::class, 'call'];
    $u->make_response = [TransportMakeResponse::class, 'call'];
    $u->make_result = [TransportMakeResult::class, 'call'];
    $u->make_point = [TransportMakePoint::class, 'call'];
    $u->make_spec = [TransportMakeSpec::class, 'call'];
    $u->make_url = [TransportMakeUrl::class, 'call'];
    $u->param = [TransportParam::class, 'call'];
    $u->prepare_auth = [TransportPrepareAuth::class, 'call'];
    $u->prepare_body = [TransportPrepareBody::class, 'call'];
    $u->prepare_headers = [TransportPrepareHeaders::class, 'call'];
    $u->prepare_method = [TransportPrepareMethod::class, 'call'];
    $u->prepare_params = [TransportPrepareParams::class, 'call'];
    $u->prepare_path = [TransportPreparePath::class, 'call'];
    $u->prepare_query = [TransportPrepareQuery::class, 'call'];
    $u->result_basic = [TransportResultBasic::class, 'call'];
    $u->result_body = [TransportResultBody::class, 'call'];
    $u->result_headers = [TransportResultHeaders::class, 'call'];
    $u->transform_request = [TransportTransformRequest::class, 'call'];
    $u->transform_response = [TransportTransformResponse::class, 'call'];
});
