const Nav = {
    render() {
        return /* html */`
        <nav class="flex">
            <ul class="flex">
                <li><a href="/" class="block py-3 px-2 text-white hover:underline">Home Page</a></li>
                <li><a href="/about" class="block py-3 px-2 text-white hover:underline">About Page</a></li>
                <li><a href="/product" class="block py-3 px-2 text-white hover:underline">Product Page</a></li>
                <li><a href="/signin" class="block py-3 ml-[2px] text-white  hover:underline">Đăng nhập</a></li>
            </ul>
            <div class="ml-80 ">
               <form action="#" method="POST" class="my-2 flex ">
                  <input type="text" class="mr-[10px] p-[3px] w-[190px]">
                  <input type="submit" value="Tìm kiếm" class="bg-[#333366] text-base mr-[7px] p-[3px] w-[70px] text-[#fff]">
               </form>
             </div>
        </nav>
        
        `;
    },
};
export default Nav;
