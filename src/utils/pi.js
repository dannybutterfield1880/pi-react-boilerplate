const PiNetworkClient = window.PiNetwork;
      
export const authenticateUser = async () => {
    try {
        const user = await PiNetworkClient.Authenticate()
        console.log(`Hello ${user.username}`)
    } catch (err) {
        // Not able to fetch the user
    }
}

export const transferRequest = async () => {
    try {
        const transferRequest = await PiNetworkClient.RequestTransfer(3.14, "Demo transfer request")
        console.log(transferRequest.status)
    } catch(err) {
        // Technical problem (eg network failure). Please try again
        console.log(err)
    }
}

if (typeof PiNetworkClient === 'undefined') {
    console.log('PiNetworkClient is not loaded to window')
} else {
    console.log('PiNetworkClient loaded!!!!!')
}

export default PiNetworkClient;