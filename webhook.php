<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // CSRF exemption

    $payload = file_get_contents('php://input');
    $payvessel_signature = $_SERVER['HTTP_PAYVESSEL_HTTP_SIGNATURE'];
    //this line maybe be differ depends on your server
    //$ip_address = $_SERVER['HTTP_X_FORWARDED_FOR']; 
    $ip_address = $_SERVER['REMOTE_ADDR']; 
    $secret = "PVSECRET-";
    $hashkey = hash_hmac('sha512', $payload, $secret);

    if ($payvessel_signature == $hashkey && $ip_address == "162.246.254.36") {
        $data = json_decode($payload, true);
        $amount = floatval($data['order']['amount']);
        $settlementAmount = floatval($data['order']['settlement_amount']);
        $fee = floatval($data['order']['fee']);
        $reference = $data['transaction']['reference'];
        $description = $data['order']['description'];
        $settlementAmount = $settlementAmount;

        // Check if reference already exists in your payment transaction table
        if (!paymentgateway::where('reference', $reference)->exists()) {
            // Fund user wallet here
            echo json_encode(["message" => "success"]);
            http_response_code(200);
        } else {
            echo json_encode(["message" => "transaction already exist"]);
            http_response_code(200);
        }
    } else {
        echo json_encode(["message" => "Permission denied, invalid hash or ip address."]);
        http_response_code(400);
    }
} else {
    // Handle other HTTP methods if needed
    echo json_encode(["message" => "Method not allowed"]);
    http_response_code(405);
}
?>
