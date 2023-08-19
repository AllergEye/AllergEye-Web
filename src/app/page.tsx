import Image from 'next/image';
import peanut from '../../public/peanuts.svg';

export default function Home() {
    return (
        <main className="flex justify-center">
            <div>
                <div className="flex flex-row mt-72 justify-center">
                    <h1 className="text-5xl text-black">AllergEye</h1>
                    <div className="ml-2">
                        <Image priority src={peanut} alt="peanut" />
                    </div>
                </div>
                <p className="text-xl">
                    One place for all the allergy information you need!
                </p>
            </div>
        </main>
    );
}
