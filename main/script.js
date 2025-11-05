let packsObj={
    starter:{title:"Starter",price:24,desc:"Ideal for freelancers and contractors just starting out.",
        features:["Ideal for freelancers and contractors just starting out.","Unlimited Clients & Projects","Invoicing & Payments","Proposals & Contracts","Tasks & Time Tracking","Client CRM","Expense Tracking","Up to 5 Project Collaborators"],popular:null},
    Professional:{title:"Professional",price:39,desc:"Everything a growing independent business needs to thrive.",features:["Ideal for freelancers and contractors just starting out.","Unlimited Clients & Projects","Invoicing & Payments","Proposals & Contracts","Tasks & Time Tracking","Client CRM","Expense Tracking","Up to 5 Project Collaborators","Proposals & Contracts"],popular:"most popular"},
    Business:{title:"Business",price:79,desc:"The perfect package for small businesses and agencies.",features:["Ideal for freelancers and contractors just starting out.","Unlimited Clients & Projects","Invoicing & Payments","Tasks & Time Tracking","3 Team Seats (additional seats $9/month)","Expense Tracking","Up to 5 Project Collaborators","Proposals & Contracts","Proposals & Contracts","Proposals & Contracts","Proposals & Contracts"],popular:null}
}

let $= document
let sec2= $.getElementById("body-sec2")

Object.values(packsObj).forEach(elem => {
    let newPack=`<div class="text-gray-700 w-93 h-230 p-12 border-gray-300 border-[0.5px] rounded-sm shadow-md shadow-gray-500">
            <h3 class="text-2xl font-semibold ">${elem.title}</h3>
            <p class="mt-1 text-sm">${elem.desc}</p>
            <div class="flex mt-6  gap-3">
              <span class="text-3xl font-semibold">$</span>
              <h2 class="text-6xl font-bold align-baseline">${elem.price}</h2>
              <span class="uppercase text-2xl self-end">/month</span>
            </div>
            <div class="bg-emerald-500 h-px w-full mt-2.5"></div>
            <ul class="pt-10 space-y-5 h-138">
                ${elem.features.map(f=>
                    `<li class="feature-container">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="stroke-emerald-500 w-4 h-4 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span>${f}</span>
                    </li>`
                ).join("")}
                </ul>
                <button class="bg-emerald-500 uppercase font-semibold rounded-md w-full h-15 my-10 text-white cursor-pointer">start free</button>
              `
              console.log(newPack)
              sec2.insertAdjacentHTML("beforeend",newPack)
});