
const express=require('express');
const app=express();
const port=3000;

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint to receive username
app.post('/user', (req, res) => {
    const { username } = req.body;
    const { user } = req.body;
    // const username = req.body.username;

    // if (username) {
    //     console.log(`Username received: ${username}`);
    //     res.status(200).send(`Hello, ${username}!`);
    // } else {
    //     res.status(400).send('Username is required');
    // }


    if (username){
        console.log(`Username received: ${username}`);
        res.status(400).send(`Username is required ${username}`);
        //return
    }
        else {
             res.status(400).send('Username is required');
         }
    

    // if (!user) {
    //     console.log(`User received: ${user}`);
    //     res.status(400).send('User is required');
    //     return
    // }

    console.log(`Username received: ${username}`);
    console.log(`User received: ${user}`);
    res.status(200).send(`Welcome ${username} and ${user}`);

});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
