export default class Sign {  
  static getSign(day,month) {
    let astro_sign = "";
    month = month.toLowerCase();
    if (month == "december"){
        if (day < 22)
        astro_sign = "sagittarius";
        else
        astro_sign ="capricorn";
    }       
    else if (month == "january"){
        if (day < 20)
        astro_sign = "capricorn";
        else
        astro_sign = "aquarius";
    }        
    else if (month == "february"){
        if (day < 19)
        astro_sign = "aquarius";
        else
        astro_sign = "pisces";
    }        
    else if(month == "march"){
        if (day < 21)
        astro_sign = "pisces";
        else
        astro_sign = "aries";
    }
    else if (month == "april"){
        if (day < 20)
        astro_sign = "aries";
        else
        astro_sign = "taurus";
    }        
    else if (month == "may"){
        if (day < 21)
        astro_sign = "taurus";
        else
        astro_sign = "gemini";
    }       
    else if( month == "june"){
        if (day < 21)
        astro_sign = "gemini";
        else
        astro_sign = "cancer";
    }        
    else if (month == "july"){
        if (day < 23)
        astro_sign = "cancer";
        else
        astro_sign = "leo";
    }       
    else if( month == "august"){
        if (day < 23)
        astro_sign = "leo";
        else
        astro_sign = "virgo";
    }        
    else if (month == "september"){
        if (day < 23)
        astro_sign = "virgo";
        else
        astro_sign = "libra";
    }        
    else if (month == "october"){
        if (day < 23)
        astro_sign = "libra";
        else
        astro_sign = "scorpio";
    }       
    else if (month == "november"){
        if (day < 22)
        astro_sign = "scorpio";
        else
        astro_sign = "sagittarius";
    }
    else {
      return "";
    }
    return astro_sign;
  }
}