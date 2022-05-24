
// console.log(typeof siyahi) //object

const siyahi =["paper.png","scissors.png","rock.png"]

const paper = document.getElementById("paper")
const scissors =document.getElementById("scissors")
const rock=document.getElementById("rock")

const komputerinSecimi=document.getElementById("komputer-secim")
const neticeYazilanDiv=document.querySelector("#netice")

// paper.onclick =doYourChoice
paper.addEventListener('click',doYourChoice) 
scissors.addEventListener('click',doYourChoice)
rock.addEventListener('click',doYourChoice)


// scissors.onclick=doYourChoice
// rock.onclick=doYourChoice
// onclick yazisini add edirsen ama mutleq function add etmelisen ki calissin code
function doYourChoice () {
      // 
      const komputerinQerari = doYourRandomChoice()
      const menimQerarim = this.dataset.id

      if(menimQerarim ==komputerinQerari) {
            netice = "TRY AGAIN"
      }
      else if(menimQerarim ==0 && komputerinQerari==1) {
            netice="YOU LOSE!"
      }

      else if(menimQerarim ==0 && komputerinQerari==2) {
            netice="YOU WIN!"
      } else if(menimQerarim ==1 && komputerinQerari==0) {
            netice="YOU WIN!"
      }
      else if(menimQerarim ==1 && komputerinQerari==2) {
            netice="YOU LOSE!"
      }
      else if(menimQerarim ==2 && komputerinQerari==0) {
            netice="LAPTOP WIN!"
      }
      else if(menimQerarim ==2 && komputerinQerari==1) {
            netice="LAPTOP LOSE!"
      }

      else{
            netice="YOU WIN!"
      }
      neticeYazilanDiv.innerText=netice   

}
function doYourRandomChoice(){
      const number = Math.round(Math.random()*2)
      komputerinSecimi.src=`./images/${siyahi[number]}`
      return number
      //`./images/ ${siyahi[number]}`
}


// harda onclick gordun func.i oyada bilmezsen---rock.onclick=doYourChoice()>>yeni bu scope-moyterize olmur
// func asagida yaradilir,yuxRIDA CAGIRILIR!
// paper.onclick---burda paper deyisendir=document.getelementbyid(" ")
//  const telebeler=[ "humay","aino","beli"]   ---bunlar string adlanir.
// getElementById("id") bura oid dogru yazilmalidir ancaq cons ...(sonra yazilan) ne olur olsun coxda onemi yoxdur.


