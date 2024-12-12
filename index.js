let digitalclock=()=>{
    let selectedele=document.getElementsByTagName('span')
    let dateobj=new Date()


    //todo: for hours
    let curhr=dateobj.getHours()
    selectedele[0].innerText=curhr

     //todo: for minutes
     let curmin=dateobj.getMinutes()
     selectedele[1].innerText=curmin

     //todo: for seconds
     let cursec=dateobj.getSeconds()
     selectedele[2].innerText=cursec

    //todo: for date
    let curdate=dateobj.getDate()
    selectedele[3].innerText=curdate
    

    //todo: for months
    let curmon=dateobj.getMonth()
    switch(curmon){
        case 0: curmon='Jan'
                    break;
        case 1: curmon='Feb'
                    break;
        case 2 :curmon='Mar'  
                break;
        case 3: curmon="April"
                break; 
        case 4: curmon="May"
                break;
        case 5: curmon="June"
                break;         
        case  6: curmon='July'
                    break;
        
        default : console.log("invalid");
    }
    selectedele[4].innerText=curmon
    
    

    //todo: for year
    let curyear=dateobj.getFullYear()
    selectedele[5].innerText=curyear

    //todo: for day
    let curday=dateobj.getDay()
    switch(curday){
        case 1: curday='Monday'
                    break;
        case 2: curday='Tuesday'
                    break;
        case 3 :curday='Wednesday'  
                break;
        case 4: curday="Thursday"
                break; 
        // case 4: curmon="May"
        //         break;
        // case 5: curmon="June"
        //         break;         
        // case  6: curmon='July'
        //             break;
        
        default : console.log("invalid");
    }
    selectedele[6].innerText=curday
    //!or use this
    selectedele[7].innerText=dateobj.toLocaleTimeString()
    selectedele[8].innerText=dateobj.toLocaleDateString()
}