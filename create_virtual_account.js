    const url = 'http://sandbox.payvessel.com';

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
        // 'api-key': 'PVKEY-BQYGA4JBHUQN1FTHD0V1YMX8LHVDEOYT',
        // 'api-secret': 'Bearer PVSECRET-UTVV9T10YOUNSF8FBDSAW2T3RDQTTABTASCWJAAYILZ7FIGX3GZ73DLAA0JC80G5',
        'Content-Type': 'application/json'
    }
    )
    }

    fetch(url, fetchData)
    .then(function() {
        // Handle response you get from the API
    }).then((data)=>console.log(data));