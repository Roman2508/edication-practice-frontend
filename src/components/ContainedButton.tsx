import { Button, ButtonProps, styled } from "@mui/material"

export const ContainedButton = styled(Button)(() => ({
  color: "#fff",
  backgroundColor: "rgb(19, 173, 163)",
  background: "linear-gradient(90deg, rgba(19, 173, 163, 1) 0%, rgba(102, 92, 206, 1) 100%)",
  ["&:disabled"]: {
    opacity: 0.7,
  },
}))

// export interface IContainedButtonProps extends ButtonProps {}

// const ContainedButton: React.FC<IContainedButtonProps> = ({ children, ...rest }) => {
//   return (
//     <Button
//       variant="contained"
//       color="inherit"
//       sx={{
//         width: "160px",
//         color: "#fff",
//         background: "rgb(19, 173, 163)",
//         backgroundColor:
//           "linear-gradient(90deg, rgba(19, 173, 163, 1) 0%, rgba(102, 92, 206, 1) 100%) !important",
//       }}
//       {...rest}
//     >
//       {children}
//     </Button>
//   )
// }

export default ContainedButton
