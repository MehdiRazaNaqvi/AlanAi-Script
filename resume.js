



//     intent ('Hello $(name* (.*))' , p => {
// //     p.play({command : "name" , data : p.name.value})
//     p.play(`Hi ${p.name.value}HIIIIIIi`)
// }
// )


// 
// onUserEvent((p, e) => {
//     
// //         p.play('Hi, this is Alaan, your voice assistant! Can I know your name?');
// //         
// //         p.then(askName())
//     
//      console.info('event', JSON.stringify(e));
//     if (e.event == 'buttonClicked') {
//          p.play({command : "home"})
//                
//     }
//     
// });


// onUserEvent((p, e) => {
//     
// 
// //        p.showPopup({
// //             html: '<div class="info-popup"> <div class="info-popup_header"></div><div class="info-popup_body"> <div>Welcome to <b>Alan Assistant</b> </div>',
// //             style: ".info-popup{max-width:394px;height:250px;max-height:250px;background:#fff;-webkit-box-shadow:0 5px 14px rgba(0,0,0,.25);box-shadow:0 5px 14px rgba(0,0,0,.25);overflow:hidden;border-radius:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.top .info-popup{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.top .info-popup_body{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-top:20px}.info-popup_header{height:191px;background-image:url(https://alan.app/assets/script-concepts/popup-image.png);background-repeat:no-repeat;background-position:center center;background-size:100% 100%}.info-popup_body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-weight:400;font-size:16px;line-height:28px;text-align:left;color:#000;padding:6px 70px 0;max-width:350px;height:70px}",
// //             overlay: true,
// //             buttonMarginInPopup: 10,
// //             force: false,
// //         });
//     
//      console.info('event', JSON.stringify(e));
//     if (e.event == 'buttonClicked') {
//                p.play('(Hi|Hi there|Hello), I am your resume maker. May I know your name please?');
//                p.then(askName)
//         
// //         getData(p)
//         
//     }
//     
// });



let testContext = context(() => {
  intent('test', (p) => {
    p.play('This is a test message.');
  });
});


let askName = context(() => {
    
    follow('$(name* (.*))' , 'My name is $(name* (.*))' ,'I am $(name* (.*))', '(It is| Its) $(name* (.*))'   , p => {
        let name = p.name.value;
       
            let regName = /^[a-zA-Z ]+$/;

        if (regName.test(name)){
            
            
//         p.play(`I just want to confirm is your name ${name}?`)
            
            

                                 p.play({command : "name" , data : name })
                                 p.play(`You have a good name ${name}. Can you now tell a brief introduction about yourself?`)
                                 p.then(askIntro)  
   
        
        }
        else{
            p.play('oops! Since your name supposed to contain only alphabets. Can you please tell us your name?');
}
         
})
    
    
    
//     follow("yes" | "yeah" | "sure" , p => {
// //                              p.play({command : "name" , data : name })
// //                              p.play(`You have a good name ${name}. Can you now tell a brief introduction about yourself?`)
// //                              p.then(askIntro)
//         
//     })
})
 









let askIntro = context(() => {
//      p.play(`You have a good name ${name}. Can you now tell a brief introduction about yourself?`)
    
    follow('$(intro* (.*))' , p => {
        
        p.play({command : "intro" , data : p.intro.value})
        p.play(`That looks intresting. Can you let us know your email address?`)
        p.then(askEmail)    
})
})



let askEmail = context(() => {
    follow('$(email* (.*))' , p => {
        let email = p.email.value;
        const validateEmail = (email) => {

        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );


    };
        
//         if(validateEmail(email)){
        p.play({command : "email" , data : p.email.value})
        p.play(`Okay. Your phone number is also essential for your resume. Can you tell us your phone number?`)
        p.then(askPhone) 
            
//         }
//         else{
//             p.play('I am sorry but something looks unusual with your email address. Can you please tell your email address again?');
//         }
        
        
      
})
})





let askPhone = context(() => {
    follow('$(phone* (.*))' , 'My phone number is $(phone* (.*))' , 'It is $(phone* (.*))' , p => {
        let name = p.phone.value;
        p.play({command : "phone" , data : p.phone.value})
        p.play(`Looks good. We now want to know which city do you live?`)
        p.then(askAddress)    
})
})





let askAddress = context(() => {
    follow('$(add* (.*))' , p => {
        let name = p.add.value;
        p.play({command : "address" , data : p.add.value})
        p.play(`Fine with it. Can you introduce your skills in a paragraph`)
        p.then(askSkills)    
})
})




let askSkills = context(() => {
    follow('$(skills* (.*))' , p => {
        let skills = p.skills.value;
        p.play({command : "skills" , data : p.skills.value})
//         p.play(`Your have got some intresting skills Now, Let you can take photo of you. Allow the camera permission from the browser and be infront of the device and say click and if you want to skip this you can say skip`)
        p.play(`Your have got some intresting skills`)
//         p.play(`Congratulations! You have completed the Profile Section of your resume  `)
        p.play(`Congratulations! You have completed the Profile Section of your resume. Now can you tell us about Qualification. Start telling us about your most recent qualification first`)
        
        p.then(askQualification)
})
})








let askQualification = context(() => {
    follow('$(skills* (.*))' , p => {
        let skills = p.skills.value;
        p.play({command : "newQualification" , data : p.skills.value})
//         p.play(`Your have got some intresting skills Now, Let you can take photo of you. Allow the camera permission from the browser and be infront of the device and say click and if you want to skip this you can say skip`)
        p.play(`Fine. Do you want to add another qualification?`)
//                 p.play(`Congratulations! You have completed the Profile Section of your resume. Now can you tell us about Qualification. Start telling us about your most recent qualification first`)
        
//         p.play(`Congratulations! You have completed the Profile Section of your resume  `)
        
//         p.then(askPhoto)    
        p.then(addQualification)    
})
})






let addQualification = context(() => {
    follow('$(answer* (.*))' , p => {
        let skills = p.answer.value;
        if(skills.includes('yes' || 'yeah' || 'sure')){
                p.play(`Okay tell us about another one`)
            
                p.then(askQualification)
            
        }


        else{
            p.play("Okay. Now we can move towards Experience section. Can you start telling us your most recent experience first?")
            p.play({command : "qualification"})
            p.then(askExperience)
            
            
        }
})
})










let askExperience = context(() => {
    follow('$(skills* (.*))' , p => {
        let skills = p.skills.value;
        p.play({command : "newExperience" , data : p.skills.value})
        
        p.play(`Fine. Do you want to add another Experience?`)
        

        p.then(addExperience)    
})
})




let addExperience = context(() => {
    follow('$(answer* (.*))' , p => {
        let skills = p.answer.value;
        if(skills.includes('yes' || 'yeah' || 'sure')){
                p.play(`Okay tell us about another one`)
            
                p.then(askExperience)
            
        }


        else{
            p.play("Well done! you have completed all 3 sections of your resume")
            p.play({command : "experience" })
            
            
            
        }
})
})








let askPhoto = context(() => {
    follow('$(click* (.*))' , p => {
        let click = p.click.value;
        if (click =="click" || click =="sure" || click =="okay" || click =="ok" ){
            
        p.play({command : "photo"})
     
//         p.then(askPhoto)    
            
        }
        else if (click == "skip" || click == "no"){
            p.play(`Okay sure`)
            p.play({command : "skip"})
            
            p.play(`Congratulations you have completed the Profile section of your resume. Now we move towards the next section that is experience`)
        }
        
        else{
            p.play(`I am unable to understand what you mean. Do you want to click photo or skip this part?`)
            
        }
        
        
})
})



fallback(p => {

    p.play("Do You want to start over?")
    
})