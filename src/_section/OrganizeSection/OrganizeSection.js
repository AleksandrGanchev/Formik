import { Card, CardHeader, CardContent, Divider, TextField, Box, Button } from "@mui/material";

const categories = [
  {
    label: "Tech",
    value: "Tech",
  },
  {
    label: "Food",
    value: "Food",
  },
  {
    label: "Else",
    value: "Else",
  },
];

const OrganizeSection = (props) => {
  return (
    <Card>
      <CardHeader title="Organize" />
      <Divider />
      <CardContent>
        <Box mb={2}>
          <TextField
            label="Category"
            name="category"
            fullWidth
            onChange={props.formikProps.handleChange}
            select
            value={props.formikProps.values.category}
          >
            {categories?.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </TextField>
        </Box>

        <Box mb={2}>
          <TextField
            label="Product Code"
            name="productCode"
            fullWidth
            onBlur={props.formikProps.handleBlur}
            onChange={props.formikProps.handleChange}
            value={props.formikProps.values.productCode}
            helperText={props.formikProps.touched.productCode && props.formikProps.errors.productCode}
            error={Boolean(props.formikProps.touched.productCode && props.formikProps.errors.productCode)}
          />
        </Box>
        <TextField
          label="Product Sku"
          name="productSku"
          fullWidth
          onBlur={props.formikProps.handleBlur}
          onChange={props.formikProps.handleChange}
          value={props.formikProps.values.productSku}
          helperText={props.formikProps.touched.productSku && props.formikProps.errors.productSku}
          error={Boolean(props.formikProps.touched.productSku && props.formikProps.errors.productSku)}
        />
      </CardContent>

      <Box mt={2} ml={2} mb={2}>
        <Button type="submit" variant="outlined" color="success">
          Create product
        </Button>
      </Box>
    </Card>
  );
};

export default OrganizeSection;
