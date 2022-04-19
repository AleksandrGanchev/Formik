import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const PricesSection = (props) => {
  return (
    <Card>
      <CardHeader title="Prices" />
      <Divider />
      <CardContent>
        <Grid container>
          <Grid item>
            <Box mr={2}>
              <TextField
                label="Price"
                name="price"
                type="number"
                fullWidth
                onBlur={props.formikProps.handleBlur}
                onChange={props.formikProps.handleChange}
                value={props.formikProps.values.price}
                helperText={props.formikProps.touched.price && props.formikProps.errors.price}
                error={Boolean(props.formikProps.touched.price && props.formikProps.errors.price)}
              />
            </Box>
          </Grid>
          <Grid item>
            <TextField
              label="Price"
              name="salePrice"
              type="number"
              fullWidth
              onBlur={props.formikProps.handleBlur}
              onChange={props.formikProps.handleChange}
              value={props.formikProps.values.salePrice}
              helperText={props.formikProps.touched.salePrice && props.formikProps.errors.salePrice}
              error={Boolean(props.formikProps.touched.salePrice && props.formikProps.errors.salePrice)}
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.formikProps.values.isAvaliable}
                onChange={props.formikProps.handleChange}
                value={props.formikProps.values.isAvaliable}
                name="isAvaliable"
              />
            }
            label="Is product avaliable"
          />
        </Box>
        <Box mt={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.formikProps.values.includeTaxes}
                onChange={props.formikProps.handleChange}
                value={props.formikProps.values.includeTaxes}
                name="includeTaxes"
              />
            }
            label="Include taxes in price?"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default PricesSection;
