const express=require('express');
const app=express();
const data=require('./data.js');
const dotenv=require('dotenv');
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home',{tileData:data.homedata});
});

app.get('/helpline',(req,res)=>{
    res.render('helpline',{data:{
        content:data.helpline,
        style:"color:red"
    }});
});

app.get('/github',(req,res)=>{
    res.render('site',{data:{
        content:data.githubdata,
        name:'Github',
        icon:'fab fa-github',
        info:"Github Repo's in which you can find details and contribute towards Mental health.",
        style:"color:#bababa"
    }});
});

app.get('/discord',(req,res)=>{
    res.render('site',{data:{
        content:data.discord,
        name:'Discord',
        'icon':'fab fa-discord',
        info:"Discord community groups where one can interact with people who can help them with mental health issues.",
        style:"color:#4f7fe0"
    }});
});

app.get('/blogs',(req,res)=>{
    res.render('site',{data:{
        content:data.blogs,
        name:'Blogs',
        'icon':'fab fa-blogger-b',
        info:"Blogs sources related to mental health.",
        style:"color:white"
    }});
});

app.get('/volunteer',(req,res)=>{
    res.render('site',{data:{
        content:data.volunteer,
        name:'Volunteer',
        'icon':'fas fa-hands-helping',
         info:"Organisations where one can volunteer to help people dealing with mental health issues.",
         style:"color:#FFD700"
    }});
});

app.get('/reddit',(req,res)=>{
    res.render('site',{data:{
        content:data.reddit,
        name:'Reddit',
        'icon':'fab fa-reddit',
        info:"SubReddits related to mental health Issues.One can post questions or answer that of others here.",
        style:"color:#ff4500"
    }});
});

app.get('/instagram',(req,res)=>{
    res.render('site',{data:{
        content:data.instagram,
        name:'Instagram',
        'icon':'fab fa-instagram',
        info:"Instagram pages spreading awareness about mental health issues and helping people.",
        style:"color:#FF1493"
    }});
});

app.get('/facebook',(req,res)=>{
    res.render('site',{data:{
        content:data.facebook,
        name:'Facebook',
        'icon':'fab fa-facebook',
        info:"Facebook Pages of communities helping out people with mental health issues.",
        style:"color:#1877f2"
    }});
});

app.get('/youtube',(req,res)=>{
    res.render('site',{data:{
        content:data.youtube,
        name:'Youtube',
        'icon':'fab fa-youtube',
        info:"Youtube Channels that spread awareness and explain about several mental health issues.",
        style:"color:#f70000"
    }});
});

app.get('/spotify',(req,res)=>{
    res.render('site',{data:{
        content:data.spotify,
        name:'Spotify',
        'icon':'fab fa-spotify',
        info:"Spotify Podcasts that one should listen to relieve stress",
        style:"color:#3bd75f"
    }});
});

app.get('/telegram',(req,res)=>{
    res.render('site',{data:{
        content:data.telegram,
        name:'Telegram',
        'icon':'fab fa-telegram',
        info:"Telegram Channels one can join to interact with people who have previously dealt with mental health issues.",
        style:"color:#0088cc"
    }});
});

app.get('/support',(req,res)=>{
    res.render('site',{data:{
        content:data.support,
        name:'Support',
        'icon':'fas fa-headset',
        info:"Several support groups one can contact if they are feeling stressed or having suicidal thoughts.",
        style:"color:#FFB6C1"
    }});
});

app.get('/twitter',(req,res)=>{
    res.render('site',{data:{
        content:data.twitter,
        name:'Twitter',
        'icon':'fab fa-twitter',
        'info':"Twitter accounts and hashtags one can watch to know about mental health problems.",
        style:"color:#1da1f2"
    }});
})
const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server is listening at ${port}`);
})

