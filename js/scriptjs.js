window .addEventListener("load",function(){
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(function(){
    document.querySelector(".preloader").style.display="none";
  },1000)
})



const  filterContainer=document.querySelector(".protfolio-filter"),
       filterBtns=filterContainer.children,
       totalFilterBtn=filterBtns.length,
       protfolioItems=document.querySelectorAll(".protfolio-item"),
       totalProtfolioItem=protfolioItems.length;

       for(let i=0; i<totalFilterBtn; i++){
       	filterBtns[i].addEventListener("click",function(){
       		filterContainer.querySelector(".active").classList.remove("active");
       		this.classList.add("active");

       		const filterValue=this.getAttribute("data-filter");
       		 
       		for(let k=0; k<totalProtfolioItem; k++){
                            if(filterValue === protfolioItems[k].getAttribute("data-category")){
                                   protfolioItems[k].classList.remove("hide");
                                   protfolioItems[k].classList.add("show");
                            }
                            else{
                                   protfolioItems[k].classList.remove("show");
                                   protfolioItems[k].classList.add("hide");
                            }
                            if(filterValue === "all"){
                                  protfolioItems[k].classList.remove("hide");
                                   protfolioItems[k].classList.add("show"); 
                            }
                     }
       	})
       }




//lightbox
  const lightbox=document.querySelector(".lightbox"),
        lightboxImg=lightbox.querySelector(".lightbox-img"),
        lightboxClose=lightbox.querySelector(".lightbox-close"),
        lightboxText=lightbox.querySelector(".caption-text"),
        lightboxCounter=lightbox.querySelector(".caption-counter");
        let itemIndex=0;
        for(let i=0; i<totalProtfolioItem; i++){
              protfolioItems[i].addEventListener("click",function(){
                     itemIndex=i;
                     changeItem();
                     toggleLightbox();
              })
        }
        function nextItem(){
              if(itemIndex == totalProtfolioItem-1){
                     itemIndex=0;
              }
              else{
                  itemIndex++   
              }
              changeItem();
        }
        function toggleLightbox(){
              lightbox.classList.toggle("open");
        }
        function prevItem(){
              if(itemIndex == 0){
                  itemIndex=totalProtfolioItem-1;
              }
              else{
                  itemIndex--   
              }
              changeItem();
        }
        function toggleLightbox(){
              lightbox.classList.toggle("open");
        }

function changeItem(){
       imgSrc=protfolioItems[itemIndex].querySelector(".protfolio-img img").getAttribute("src");
        lightboxImg.src=imgSrc;
        lightboxText.innerHTML=protfolioItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML= (itemIndex+1) + "of" +totalProtfolioItem;
}

//close light box
lightbox.addEventListener("click",function(event){
if(event.target === lightboxClose || event.target === lightbox){
       toggleLightbox();
}
})

//aside navbar
 const nav=document.querySelector(".nav"),
       navList=nav.querySelectorAll("li"),
       totalNavList=navList.length;
       allSection=document.querySelectorAll(".section"),
       totalSection=allSection.length;
        
       for(let i=0; i<totalNavList; i++){
        const a=navList[i].querySelector("a");
        a.addEventListener("click",function(){
           
          for(let j=0; j<totalNavList; j++){
            
            navList[j].querySelector("a").classList.remove("active");

            }
          this.classList.add("active");

          showSection(this);
          if(window.innerWidth<1200){
            asideSectionTogglerBtn();
          }
        })
       }

  
const navTogglerBtn=document.querySelector(".nav-toggler"),
      aside=document.querySelector(".aside");

      navTogglerBtn.addEventListener("click",()=>{
        asideSectionTogglerBtn();
      })
         

      
      function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0;i<totalSection; i++){
          allSection[i].classList.toggle("open");
        }
      }









