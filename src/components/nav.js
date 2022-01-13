const Nav = {
    render() {
        return /* html */`
        <nav class="flex">
            <ul class="flex">
                <li><a href="/" class="block py-3 px-4 text-white hover:bg-blue-500">Home Page</a></li>
                <li><a href="/about" class="block py-3 px-4 text-white hover:bg-blue-500">About Page</a></li>
                <li><a href="/product" class="block py-3 px-4 text-white hover:bg-blue-500">Product Page</a></li>
            </ul>
            <div class="ml-96 ">
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
