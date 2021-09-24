import React, {ChangeEvent, useState} from 'react';
import s from './Contact.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import Subtitle from "../common/components/subtitle/Subtitle";

const Contact = () => {
    const [subject, setSubject] = useState<string | undefined>()
    const [name, setName] = useState<string | undefined>()
    const [message, setMessage] = useState<string | undefined>()

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (e.currentTarget.dataset.contact) {
            const trigger: string = e.currentTarget.dataset.contact;

            if (trigger === 'name') {
                setName(value);
            } else if (trigger === 'subject') {
                setSubject(value);
            }
        }
    }

    const handleArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value) {
            setMessage(e.target.value)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Print value', name, subject, message);
    }

    return (
        <div className={s.contact}>
            <div className={` ${styleContainer.container} ${s.contactContainer}`}>
                <div className={s.contactForm}>
                    <Subtitle text={"Contact"}/>
                    <Title text={"Get in touch"}/>
                    <div className={s.contactBlock}>
                        <div className={s.contactInfoBlock}>
                            <p className={s.details}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar
                                facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                                Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium
                                orci vestibulum eget.
                            </p>
                            <ul>
                                <li>item 1</li>
                                <li>item 2</li>
                                <li>item 3</li>
                            </ul>
                        </div>
                        <div className={s.contactFormBlock}>
                            <form onSubmit={handleSubmit}>
                                <label>
                                    Subject:
                                    <input
                                        data-contact="name"
                                        value={name}
                                        onChange={handleInput}
                                        className={s.formInput}/>
                                </label>
                                <label>
                                    Name:
                                    <input
                                        data-contact="subject"
                                        value={subject}
                                        onChange={handleInput}
                                        className={s.formInput}/>
                                </label>
                                <label>
                                    Message:
                                    <textarea
                                        value={message}
                                        onChange={handleArea}
                                        rows={5}
                                        className={s.formInput}></textarea>
                                </label>
                                <button type={"submit"} value={"submit"}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
