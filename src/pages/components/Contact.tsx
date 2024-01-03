import Image from "next/image";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [ state, handleSubmit ] = useForm("xayryjzz");
    if (state.succeeded) {
        return <p>Thanks, I'll get back to you ASAP!</p>;
    }

    return(
        <section id="contact-form" className="section">
            <div className="mx-auto">
                <div className="grid lg:grid-cols-2">
                    <div className="order-last">
                    <header className="section-header pb-4">Get in touch</header>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="double-input">
                                <div className="">
                                    <label className="sr-only" htmlFor="first">first name</label>
                                    <input id="first" name="first" type="text" placeholder="first name" className="input w-full"></input>
                                    <ValidationError prefix="FirstName" field="first" errors={state.errors}/>
                                </div>
                                <div className="">
                                    <label className="sr-only" htmlFor="last">last name</label>
                                    <input id="last" name="last" type="text" placeholder="last name" className="input w-full"></input>
                                    <ValidationError prefix="LastName" field="last" errors={state.errors}/>
                                </div>
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="company">company</label>
                                <input id="company" name="company" type="text" placeholder="company" className="input w-full"></input>
                            </div>
                            <div className="double-input">
                                <div>
                                    <label className="sr-only" htmlFor="email">email</label>
                                    <input id="email" name="email" type="email" placeholder="email" className="input w-full"></input>
                                    <ValidationError prefix="Email" field="email" errors={state.errors}/>
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="tel">phone number</label>
                                    <input id="tel" name="tel" type="tel" placeholder="phone" className="input w-full"></input>
                                    <ValidationError prefix="Phone" field="tel" errors={state.errors}/>
                                </div>
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="message">message</label>
                                <textarea id="message" name="message" placeholder="message" rows={8} className="input w-full"></textarea>
                                <ValidationError prefix="Message" field="message" errors={state.errors}/>
                            </div>
                            <div className="mx-auto text-center lg:text-left">
                                <button className="button" type="submit" disabled={state.submitting}>submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative h-auto lg:order-first lg:w-[700px] lg:h-auto lg:-left-28 pb-4">
                            <img src="/Phone.png" className="h-auto w-auto object-fill"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;