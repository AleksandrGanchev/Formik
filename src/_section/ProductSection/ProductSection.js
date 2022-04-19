import { Card, CardHeader, CardContent, Divider, Box, Typography, TextField } from "@mui/material";

const ProductSection = (props) => {
  return (
    <Card className="card">
      <CardHeader title="Product" />
      <Divider />
      <CardContent>
        <Box mt={3} mb={1}>
          <Typography color="textSecondary">Product Name</Typography>
        </Box>
        <TextField
          label="Product Name"
          name="name"
          onBlur={props.formikProps.handleBlur}
          onChange={props.formikProps.handleChange}
          value={props.formikProps.values.name}
          fullWidth
          helperText={props.formikProps.touched.name && props.formikProps.errors.name}
          error={Boolean(props.formikProps.touched.name && props.formikProps.errors.name)}
        />
        <Box mt={3} mb={1}>
          <Typography color="textSecondary">Description</Typography>
        </Box>
        <TextField
          label="Description"
          name="description"
          onBlur={props.formikProps.handleBlur}
          onChange={props.formikProps.handleChange}
          value={props.formikProps.values.description}
          fullWidth
          helperText={props.formikProps.touched.description && props.formikProps.errors.description}
          error={Boolean(props.formikProps.touched.description && props.formikProps.errors.description)}
          multiline
          rows={4}
        />
      </CardContent>
    </Card>
  );
};

export default ProductSection;
