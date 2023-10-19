import { Typography, Button } from "@mui/material"

export const PharmacyPage = () => {
  const initialData = {
    name: "ПОДОРОЖНИК мережа аптек",
    sity: "м. Житомир",
    street: "вул. Небесної Сотні 10",
    places: 1,
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.937136466153!2d28.669215376545797!3d50.25575837155564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c653a11c54cf7%3A0x933a8145184dc0bc!2sApteka%20%22Podorozhnyk%22!5e0!3m2!1sru!2sua!4v1697738977245!5m2!1sru!2sua",
  }

  //   const [data, setData] = React.useState(initialData)

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <img src="../podoroznik.png" height={50} />
      </div>

      <div className="test">
        <div>
          <Typography variant="h5">{initialData.name}</Typography>
          <Typography variant="h6" sx={{ lineHeight: 1, mt: 1 }}>
            {initialData.sity}
          </Typography>
          <Typography variant="h6" sx={{ lineHeight: 1 }}>
            {initialData.street}
          </Typography>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <Button variant="outlined">Вибрати як базу практики</Button>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            кількість місць: {initialData.places}
          </Typography>
        </div>
      </div>

      <iframe
        src={initialData.location}
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
      />
    </>
  )
}
