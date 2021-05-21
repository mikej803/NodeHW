

const dns = require('dns');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a DNS name: ', (dnsName)=>{
    rl.close();

    dns.lookup(dnsName, (err, address)=>{
        if(err){
            console.log(err.message);
            return
        }
        console.log('address:', address);
    });
})