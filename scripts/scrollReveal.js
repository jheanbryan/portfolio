export const activeScrollReveal = () => {    
    ScrollReveal().reveal('.reveal', {
        duration: 500,      
        distance: '50px',  
        origin: 'bottom',    
        interval: 200, 
        easing: 'ease-in-out',
        reset: true
      });
};
