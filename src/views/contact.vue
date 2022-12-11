<template>
    <div class="wrap">
        <p class="title">CONTACT US</p>
        <div class="content">
            <p>Customer Service Email: </p>
            <p>XXOO123456789@company.com </p>
            <br/>
            <p>Customer Service Phone:</p>
            <p>(123) 456 - 7890</p>            
            <br/>
            <p>Business Hours:</p>
            <p>Monday - Friday 9am - 5:00pm Pacific Time (excludes Holidays)</p>
        </div>

        <span class="line"></span>

        <div class="leaveInfo">
           <p class="title">GET IN TOUCH</p>  
           <p>
                Please do not hesitate to contact us 
                <br/> 
                in case you have any questions or comments
            </p>
           <div class="infoForm">
                <div class="inputContainer">
                    <input type="text" placeholder="Name or Company">
                    <input type="text" placeholder="Industrial Classification">
                    <input type="text" placeholder="Country">
                    <input type="text" placeholder="Phone">
                    <input type="text" placeholder="Email">
                    <textarea placeholder="Message"></textarea>
                </div>
               <div class="btns">
                    <button class="clearBtn">CLEAR ALL</button>
                    <button class="submitBtn">SUBMIT</button>
               </div>
           </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import '../assets/scss/view/contact.scss';
</style>