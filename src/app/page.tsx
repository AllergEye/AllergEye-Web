import Image from 'next/image';
import peanut from '../../public/peanuts.svg';
import { Text } from '@/components/Text/text';

export default function Home() {
    return (
        <main className="flex justify-center">
            <div>
                <div className="flex flex-row mt-72 justify-center">
                    <Text
                        variant="extremelyHuge"
                        align="center"
                        textColour="black"
                        weight="normal"
                    >
                        AllergEye
                    </Text>
                    <div className="ml-2">
                        <Image priority src={peanut} alt="peanut" />
                    </div>
                </div>
                <Text
                    variant="normal"
                    align="center"
                    textColour="black"
                    weight="normal"
                >
                    One place for all the allergy information you need!
                </Text>
            </div>
        </main>
    );
}
