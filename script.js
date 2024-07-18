      var t=1;
        function show1(){
            if(document.getElementById("b1").value.length==0)
            {
            if(t%2==1){
                document.getElementById("b1").value="x";
            }else{
                document.getElementById("b1").value="0";
            }

            t++;
            winner();
        }
    }
        function show2(){
            if(document.getElementById("b2").value.length==0)
            {
            if(t%2==1){
                document.getElementById("b2").value="x";
            }else{
                document.getElementById("b2").value="0";
            }
            
            t++;
            winner();
        }
    }
        function show3(){
            if(document.getElementById("b3").value.length==0)
            {
            if(t%2==1){
                document.getElementById("b3").value="x";
            }else{
                document.getElementById("b3").value="0";
            }
            
            t++;
            winner();
        }
    }
        function show4(){
            if(document.getElementById("b4").value.length==0)
            {
            if(t%2==1){
                document.getElementById("b4").value="x";
            }else{
                document.getElementById("b4").value="0";
            }
            
            t++;
            winner();
        }
    }
        function show5(){
            if(document.getElementById("b5").value.length==0)
            {
            if(t%2==1){
                document.getElementById("b5").value="x";
            }else{
                document.getElementById("b5").value="0";
            }
            
            t++;
            winner();
        }
    }
        function show6(){
            if(document.getElementById("b6").value.length==0)
            {
            if(t%2==1){
                document.getElementById("b6").value="x";
            }else{
                document.getElementById("b6").value="0";
            }
            
            t++;
            winner();
        }
    }
        function show7(){
            if(document.getElementById("b7").value.length==0)
            {
            if(t%2==1){
                document.getElementById("b7").value="x";
            }else{
                document.getElementById("b7").value="0";
            }
            
            t++;
            winner();
        }
    }
        function show8(){
            if(document.getElementById("b8").value.length==0)
            {
            if(t%2==1){
                document.getElementById("b8").value="x";
            }else{
                document.getElementById("b8").value="0";
            }
            
            t++;
            winner();
        }
    }
        function show9(){
            if(document.getElementById("b9").value.length==0)
            {
            if(t%2==1){
                document.getElementById("b9").value="x";
            }else{
                document.getElementById("b9").value="0";
            }
            
            t++;
            winner();
        }
    }
        function winner(){
          var a =document.getElementById("b1").value;
          var b =document.getElementById("b2").value;
          var c =document.getElementById("b3").value;
          var d =document.getElementById("b4").value;
          var e =document.getElementById("b5").value;
          var f =document.getElementById("b6").value;
          var g =document.getElementById("b7").value;
          var h =document.getElementById("b8").value;
          var i =document.getElementById("b9").value;


          if(a.length!=0&&b.length!=0&&c.length!=0)
          {
            if(a==b&&a==c)
            {

                        if(a=="x")
                        {
                        
                            document.getElementById("winner").innerHTML="Player 1 wins";
                        }
                        else
                        {
                            document.getElementById("winner").innerHTML="Player 2 wins";
                        }
                        // restart();

            }

        }

        if(d.length!=0 && e.length!=0&&f.length!=0)
        {
          if(d==e && d==f)
          {

                      if(d=="x")
                      {
                           document.getElementById("winner").innerHTML="Player 1 wins";
                      }
                      else
                      {
                           document.getElementById("winner").innerHTML="Player 2 wins";
                      }
                    //   restart();
                    }
          }

          
        if(g.length!=0 && h.length!=0&&i.length!=0)
        {
          if(g==h && g==i)
          
          {

                      if(g=="x")
                      {
                           document.getElementById("winner").innerHTML="Player 1 wins";
                      }
                      else
                      {
                           document.getElementById("winner").innerHTML="Player 2 wins";
                      }
                    //   restart();
                    }

          }

          
        if(a.length!=0 && d.length!=0&&g.length!=0)
        {
          if(a==d && a==g)
          {

                      if(a=="x")
                      {
                           document.getElementById("winner").innerHTML="Player 1 wins";
                      }
                      else
                      {
                           document.getElementById("winner").innerHTML="Player 2 wins";
                      }
                    //   restart();

          }
       }

       
       if(b.length!=0 && e.length!=0 && h.length!=0)
       {
         if(b==e && b==h)
         {

                     if(b=="x")
                     {
                       document.getElementById("winner").innerHTML="Player 1 wins";
                     }
                     else
                     {
                          document.getElementById("winner").innerHTML="Player 2 wins";
                     }
                    //  restart();

         }
        }

        if(c.length!=0 && f.length!=0 && i.length!=0)
        {
          if(c==f && c==i)
          {
 
                      if(c=="x")
                      {
                           document.getElementById("winner").innerHTML="Player 1 wins";
                      }
                      else
                      {
                           document.getElementById("winner").innerHTML="Player 2 wins";
                      }
                    //   restart();
 
          }
         }

         if(a.length!=0 && e.length!=0 && i.length!=0)
         {
           if(a==e && a==i)
           {
  
                       if(a=="x")
                       {
                            document.getElementById("winner").innerHTML="Player 1 wins";
                       }
                       else
                       {
                            document.getElementById("winner").innerHTML="Player 2 wins";
                       }
                    //    restart();
  
           }
          }

          if(c.length!=0 && e.length!=0 && g.length!=0)
          {
            if(c==e && c==g)
            {
   
                        if(c=="x")
                        {
                             document.getElementById("winner").innerHTML="Player 1 wins";
                        }
                        else
                        {
                             document.getElementById("winner").innerHTML="Player 2 wins";
                        }
                        // restart()
   
            }
           }
           
           if(t==10){
           
             document.getElementById("winner").innerHTML="DRAW";
           }
        
    }

    function restart(){
        document.getElementById("b1").value="";
        document.getElementById("b2").value="";
        document.getElementById("b3").value="";
        document.getElementById("b4").value="";
        document.getElementById("b5").value="";
        document.getElementById("b6").value="";
        document.getElementById("b7").value="";
        document.getElementById("b8").value="";
        document.getElementById("b9").value="";
        document.getElementById("winner").innerHTML="";
         t=1;
    }