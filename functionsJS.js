//Añade un estilo a un id, ademas al pasarle un numero n, podemos usarlo siempre que queramos.

function ver(n) {
    document.getElementById("subseccion"+n).style.display="block"
    }
function ocultar(n) {
    document.getElementById("subseccion"+n).style.display="none"
    }

/* ************************************EJEMPLO PRACTICO DE UN NAV HTML HECHO CON TAILWINDCSS **********************************************

 <nav class="pt-6 space-x-5 text-lg md:text-xl lg:text-2xl mb-4 text-center">
            <ul class="flex gap-5 text-center m-auto">
                <li> <a class="transition w-screen border-b-2 hover:border-palette-three active:opacity-75"
                        href="index.html">Home</a></li>
                <li  onmouseover="ver(1)" onmouseout="ocultar(1)"> <a  class="transition w-screen border-b-2 hover:border-palette-three active:opacity-75"
                        href="pages/products.html">Products</a>
                    <ul  id="subseccion1" class="text-left absolute  text-lg bg-white">  <!-- IMPORTANTE--> id=mismo id de la function + n  -->
                        <li> <a class="transition w-screen border-b-2 hover:border-palette-three active:opacity-75"
                                href="pages/coaching.html">Coaching</a></li>
                        <li> <a class="transition w-screen border-b-2 hover:border-palette-three active:opacity-75"
                                href="pages/ebook.html">Ebooks</a></li>
                        <li> <a class="transition w-screen border-b-2 hover:border-palette-three active:opacity-75"
                                href="pages/recomendation.html">Recomendations</a></li>
                    </ul>
                </li>
                <li> <a class="transition w-screen border-b-2 hover:border-palette-three active:opacity-75"
                        href="pages/free.html">Free</a></li>
                <li> <a class="transition w-screen border-b-2 hover:border-palette-three active:opacity-75"
                        href="pages/about.html">About</a></li>
            </ul>
        </nav>
        */
