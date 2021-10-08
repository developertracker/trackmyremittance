function manageHeight(){
	var winHeight = $(window).height();
	var headerHeight = $(".header").height();
	var totalHeight = winHeight-headerHeight;
	$(".content").css("height",totalHeight);
}
$(document).ready(function(){
	manageHeight();



	$('.otpEntry .input-control').each(function(){
		$(this).keypress(function(){
			$(this).next().focus();
		});
	});
  

  $('.otpbtn').click(function(){
    if($('#mobile').val().length === 10){
      $('.otpbox').show();
      $('.otp-input').show();
      $(this).hide();
      $('.submitbtn').show();
      $('.resendOTP').addClass('show');
    }
    else{
      $('.otpbox').hide();
    }
  })
});
$(window).resize(function(){
	manageHeight();
});


function validateForm(e) {
  let isAccount = document.searchForm.accountNumber.value;
  let isMobile = document.searchForm.mobileNumber.value;

  if (isAccount == "") {
    alert("Please enter the Beneficiary Account Number where the funds will be credited to proceed.");
    return false;
  }
  if (isMobile == "" || isMobile.length < 10) {
    alert("Please enter the Mobile Number registered with the Bank for the mentioned Beneficiary Account Number to proceed.");
    return false;
  }
}

function validateOTP() {
  let isOtp = document.querySelectorAll('.otpEntry .input-control'); 
  for(const props of isOtp) {
    if (props.value == "") {
      alert("Please enter the OTP sent on your Mobile Number to proceed.");
      return false;
    }
  }
}

/*=================================================
===================Select JS ======================*/

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);