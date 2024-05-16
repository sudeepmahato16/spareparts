import { catchAsync } from "@/utils/catchAsync";


export const getCurrentUser = catchAsync(async (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      user: req.user
    }
  })
})