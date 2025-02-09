import User from "../Models/user.model.js";
import AppError from "../Utils/error.utils.js";

export const getRazorpayApiKey = async (req,res,next) => {
    res.status(200).json({
        success:true,
        message:'Razorpay API Key',
        key:process.env.RAZORPAY_KEY_ID
    })
}

export const buySubscription = async (req,res,next) => {
    const {id} = req.user;
    const user = await User.findById(id);

    if(!user){
        return next(
            new AppError('Unauthorized, please login')
        )
    }

    if(user.role === 'ADMIN'){
        return AppError(
            'Admin cannot buy subscription'
        )
    }

    const subscription
}

export const verifySubscription = async (req,res,next) => {

}

export const cancelSubscription = async (req,res,next) => {

}

export const allPayments = async (req,res,next) => {

}

