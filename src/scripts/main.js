content = document.getElementById("content");

buttonAbout = document.getElementById("btn_About");
buttonAbout.addEventListener("click", function() {
  document.getElementById('content').innerHTML = `

  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white pb-2 text-center">About Me</h1>

  <div class="flex flex-wrap ">
  <div class="p-2 w-full">
    <div class="h-full flex items-center text-center border-gray-800  rounded-lg">
      <div class="flex-grow">
        <p class="text-gray-400">In my life I have always been fascinated by learning about new technologies, I have had a special fascination with code and security.</p>
      </div>
    </div>
  </div>

  <div class="p-2 w-full">
    <div class="h-full flex items-center text-center border-gray-800  rounded-lg">
      <div class="flex-grow">
        <p class="text-gray-400">I have always programmed for fun, I want to improve, learn, be part of this community.</p>
      </div>
    </div>
  </div>

  <div class="p-2 w-full">
    <div class="h-full flex items-center text-center border-gray-800  rounded-lg">
      <div class="flex-grow">
        <p class="text-gray-400">If you feel there is anything I can help you with, you can contact me through the following channels.</p>
      </div>
    </div>
  </div>
  
  <div class="p-2 w-full">
    <div class="h-full flex items-center border-gray-800 rounded-lg">
      <div class="flex-grow space-x-7 items-center text-center">
      <a href="https://github.com/sepulvedab" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="inline-flex items-center justify-center" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
        </svg>
      </a>
      
      <a href="https://www.linkedin.com/in/sepulveda-carlos/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="inline-flex items-center justify-center" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
        </svg>
      </a>

      <a href="https://wa.me/573166654220" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="inline-flex items-center justify-center" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      </a>

      <a href="mailto:sepulveda-carlos@outlook.com">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="inline-flex items-center justify-center" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
        </svg>
      </a>
      
      </div>
    </div>
  </div>
  
     
  `;
  
});

buttonProjects = document.getElementById("btn_Projects");
buttonProjects.addEventListener("click", function() {
  document.getElementById('content').innerHTML = `

  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white pb-2 text-center">My Last Projects</h1>

  <div class="flex flex-wrap -m-2">
  <div class="p-2 w-full">
    <div class="h-full flex items-center text-center border-gray-800  rounded-lg">
      <div class="flex-grow">
        <p class="text-gray-400">Coming soon.</p>
      </div>
    </div>
  </div>
  
  <div class="p-2  md:w-1/2  w-full">
    <a href="">
    
    
  <div class="h-full flex items-center border-gray-800 border p-1 rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-16 h-16 object-center flex-shrink-0  mr-4" viewBox="0 0 16 16">
      <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zM5.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927"/>
    </svg>
      <div class="flex-grow">
        <h2 class="text-white title-font font-medium">Project name</h2>
        <p class="text-gray-600">Some info.</p>
      </div>
    </div>
    </a>
  </div>

  <div class="p-2 md:w-1/2 w-full">
  <a href="">
    <div class="h-full flex items-center border-gray-800 border p-1 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-16 h-16 object-center flex-shrink-0  mr-4" viewBox="0 0 16 16">
        <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zM5.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927"/>
      </svg>
        <div class="flex-grow">
          <h2 class="text-white title-font font-medium">Project name.</h2>
          <p class="text-gray-600">Some info.</p>
      </div>
    </div>
    </a>
  </div>
     
  `;
  
});