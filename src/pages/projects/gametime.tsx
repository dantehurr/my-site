import Image from "next/image"
import { FaArrowRight } from 'react-icons/fa6';

export default function Gametime() {
    return (
        <main id="gametime-page">
            <div className="uppercase text-sm text-center py-5 lg:py-10 lg:text-lg font-light">project</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-4 mx-8 lg:mx-16">
                <div className="order-first">
                    <div className="lg:fixed lg:w-[30%] dashed-outline">
                        <a className="text-4xl lg:pb-8 flex flex-row items-center gap-2 lg:gap-4 justify-center" href="https://gametime-stats.firebaseapp.com/home" target="_blank">Gametime Stats<FaArrowRight /></a>
                        <ul className="list-disc text-lg pt-10 lg:pt-4">
                            <li className="py-2">Purpose: Academic project for Mobile Web Development course.</li>
                            <li className="py-2">Objective: Develop a progressive web app (PWA) that dempnstrates topics learned in class, including fetching data from an API, building an app for production, and deploying an app to the web. Then deploy the production build to a mobile device as a native app.</li>
                            <li className="py-2">Tools Used: Capacitor, Cordova, CSS, HTML, Ionic Framework, JavaScript, and React. Hosted on web using Google Firebase and deployed to iOS using Swift and Xcode.</li>
                        </ul>
                    </div>
                </div>
                <div className="gap-9 lg:gap-12 pt-12 order-last flex flex-col">
                    <div className="">
                        <img className="" src="/iconandlogo.svg" />
                        <p className="text-sm pt-4 mx-4 text-center">iOS app icon and web app logo, designed in Adobe Illustrator using my own color palette and illustration, along with typefaces Zuume Cut from Adam Ladd and Neue Machina from Pangram Pangram</p>
                    </div>
                    <div className="">
                        <img className="rounded-2xl" src="/screenshot4.png" />
                        <p className="text-sm pt-4 mx-4 text-center">Web app UI of scheduling and scores, with live data fetched and pushed from an open-source API (NBA-API) around every 5 minutes. This UI was modeled in Figma to provide some of the most useful data points (in terms of a user's percieved value), in a single page app.</p>
                    </div>
                    <div className="">
                        <img className="rounded-[3rem] mx-auto" src="/iphone15pro.gif" />
                        <p className="text-sm pt-4 mx-4 text-center">iOS app UI with splash screen, displays the same data as the web app but is responsive to screen size.</p>
                    </div>
                    <div className="">
                        <img className="rounded-2xl" src="/screenshot3.png" />
                        <p className="text-sm pt-4 mx-4 text-center">JavaScript component I created using conditional statements to return the current status of the game, the reasoning being that if the game was not yet started or had ended, the function would return a permanent state of 'Q0' or 'Q4', respectively (see line 13).</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </main>
    )
}