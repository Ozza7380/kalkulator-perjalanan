//input sederhana
const jamBerangkat = 10
const durasi = 10
const jamSampai = jamBerangkat + durasi
console.log("Sampai WIB:", jamSampai)

const selisihMekkah = 4
const jamMekkah = jamSampai - selisihMekkah
console.log("Sampai Mekkah:", jamMekkah)

//versi benar
const berangkat = new Date()
berangkat.setHours(10, 0, 0)

const durasiMS = 10 * 60 * 60 * 1000

const sampai = new Date(berangkat.getTime() + durasiMS)
const mekkah = new Date(sampai.getTime() - (4 * 60 * 60 * 1000))

console.log("Berangkat  :", berangkat.toLocaleTimeString())
console.log("Sampai WIB :", sampai.toLocaleTimeString())
console.log("Mekkah :", mekkah.toLocaleTimeString())

//uograde
const zona = "WITA" // WIB, WITA, WIT

const offset = {
    WIB: 7,
    WITA: 8,
    WIT: 9
}

//konversi ke utc lalu ke mekkah
const utc = new Date(sampai.getTime() - offset[zona] * 3600000)