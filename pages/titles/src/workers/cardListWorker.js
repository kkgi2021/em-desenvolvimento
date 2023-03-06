onmessage = ({data}) => { 
    let counter = 0                        //funçao global dentro do worker e os dados dele vem dentro

    console.log('activating blocking operation...', data.maxItems)
    console.time('blocking-op')
    // blocking function
    // 1e5 = 100.000
    for ( ; counter < data.maxItems; counter++) console.log('.')
    console.timeEnd('blocking-op')      //dentro do objeto data 

    postMessage(
        {response: 'ok', data: counter} 
    )
}