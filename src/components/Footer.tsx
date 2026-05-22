import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone, faTicket } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-teal-300/40 bg-teal-400/[0.15] text-teal-200">
              <FontAwesomeIcon icon={faTicket} />
            </span>
            <span className="text-xl font-black text-white">Tazkarti</span>
          </div>
          <p className="max-w-md leading-8 text-slate-300">
            منصة عربية عصرية تساعدك تكتشف وتحجز أفضل الفعاليات بسهولة، من الحفلات والمؤتمرات إلى المسرح والمباريات وورش العمل.
          </p>
          <div className="mt-6 flex gap-3">
            {[faFacebookF, faInstagram, faXTwitter].map((icon, index) => (
              <span key={index} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-teal-400 hover:text-slate-950">
                <FontAwesomeIcon icon={icon} />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-black text-white">روابط سريعة</h3>
          <div className="grid gap-3 text-sm text-slate-300">
            <Link className="hover:text-teal-200" href="/events">الفعاليات</Link>
            <Link className="hover:text-teal-200" href="/bookings">حجوزاتي</Link>
            <Link className="hover:text-teal-200" href="/about">عن الموقع</Link>
            <Link className="hover:text-teal-200" href="/contact">تواصل معنا</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-black text-white">تواصل</h3>
          <div className="grid gap-3 text-sm text-slate-300">
            <span className="flex items-center gap-2"><FontAwesomeIcon icon={faLocationDot} className="text-teal-300" /> القاهرة، مصر</span>
            <span className="flex items-center gap-2"><FontAwesomeIcon icon={faEnvelope} className="text-teal-300" /> hello@tazkarti.local</span>
            <span className="flex items-center gap-2"><FontAwesomeIcon icon={faPhone} className="text-teal-300" /> 0100 000 0000</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
        © 2026 Tazkarti. كل الحقوق محفوظة.
      </div>
    </footer>
  );
}
