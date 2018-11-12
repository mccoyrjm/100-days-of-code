function breathe(amount) {
    return new Promise((resolve, reject) => {
        if (amount < 500) {
            reject("That is too small of a value.");
        }
        setTimeout(() => {
            resolve(`Done for ${amount} ms`);
        }, amount);
    });
}

async function go() {
    console.log("start");
    console.log(await breathe(600));
    console.log(await breathe(700));
    console.log(await breathe(900));
    console.log("end");
}

go();