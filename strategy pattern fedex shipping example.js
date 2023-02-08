function Fedex() {
    this.calculate = package => {
        // fedex calculations...
        return 2.45;
    }
}

function UPS() 
{
    this.calculate = package=>{
        //ups calculations...
        return 1.56;
    }
}

function USPS(){
    this.calculate = package => {
        //usps calculations
        return 5
    }
}

//no need to do the following with the strategy pattern
// const fedex = new Fedex();
// const ups = new UPS();
// const usps = new USPS();
// const package - { from: 'Alabama', to: 'Georgia', weight: 1.56 }

function Shipping(){
    this.company =""
    this.setStrategy = (company) => {
        this.company = company;
    }
    this.calculate = package=>{
        return this.company.calculate(package);
    }
}

 const shipping = new Shipping();
 shipping.setStrategy(fedex);
 console.log("Fedex: " + shipping.calculate(package));
