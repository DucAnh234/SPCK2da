function scrollToElement1() {
    var element = document.getElementById("lichSuHinhThanh");
    // vị trí muốn scroll đến 
    element.scrollIntoView({ behavior: "smooth" });
    // hàm xử lý có sẵn - scrollIntoView
  }

  function scrollToElement2() {
    var element = document.getElementById("sanxuat");
    element.scrollIntoView({ behavior: "smooth" });
  }
