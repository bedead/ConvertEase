import { styles } from "@/app/style";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900">
            <div className={`${styles.paddingY} ${styles.paddingX}  mx-auto flex justify-between items-center`}>
                <div>
                    <p>Made with ❤️ by Satyam Mishra (bedead)</p>
                    <p>&copy; {new Date().getFullYear()} DownloadTube</p>
                </div>
                <div className="flex justify-between rounded-lg border-[2px] border-separate border-indigo-600">
                    <Link href="https://bedead.github.io/portfolio-react-threejs/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg">
                        Portfolio
                    </Link>
                    <Link href="https://www.paypal.com/paypalme/Satyam501" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-4 py-2 rounded ">
                        Donate (Paypal)
                    </Link>
                </div>
            </div>
        </footer>
    )
}