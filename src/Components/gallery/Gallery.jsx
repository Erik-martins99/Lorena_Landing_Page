import { Grid, Card, CardMedia, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"

const Gallery = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const allImages = [1, 2, 3, 4, 5, 6, 7, 8]
  const mobileImages = [1, 2, 5, 7]

  const imagesToRender = isMobile ? mobileImages : allImages

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
    >
      {imagesToRender.map((item) => (
        <Grid
          item
          xs={6}
          sm={4}
          md={3}
          key={item}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card sx={{ borderRadius: 2, overflow: "hidden" }}>
            <CardMedia
              component="img"
              image={`/image-${item}.jpg`}
              alt={`Imagem ${item}`}
              sx={{
                width: "100%",
                maxWidth: 240,
                height: 320,
                objectFit: "cover",
              }}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Gallery
