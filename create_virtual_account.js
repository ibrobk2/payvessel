    const url = 'https://api.payvessel.com/api/external/request/customerReservedAccount/';

    let data = 
    {
        "email":"oyefgdgf@gmail.com",
        "name":"MUSA OLA",
        "phoneNumber":"09011111112",
        "bankcode":["120001", "101"],
        "account_type": "STATIC",
        "businessid":"061C074E2F91F944B93993B4",
        "bvn":"",

    }

    let fetchData = {
    method: 'POST',
    // body: JSON.stringify(data),
    body: data,
    headers: new Headers({
        'api-key': 'PVKEY-FNLYA8DW2LGZE6KFI0K4AA7N5JP',
        'api-secret': 'Bearer PVSECRET-5LZNFFNT8N9NF6SXUZPWEYQ0Q2Y',
        'Content-Type': 'application/json'
    }
    )
    }

    fetch(url, fetchData)
    .then(function() {
        // Handle response you get from the API
    }).then((data)=>console.log(data));