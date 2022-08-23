const dataModel = require('../models/data');

const getDetails = async(req, res) =>{

    try{
        let details = await dataModel.find({}).sort({createdAt: "desc"});;

        if(details){
            res.json(details)
        }
    }catch(err){
        console.log(err)
    }   
}

const getDetail = async(req, res) =>{

    try{
        let details = await dataModel.findById(req.params.id);

        if(details){
            res.json(details)
        }
    }catch(err){
        console.log(err)
    }   
}

const createDetail = async(req, res) => {
    try{
        const detail = new dataModel({
            name: req.body.name,
            reporting_manager: req.body.reporting_manager,
            technical_lead: req.body.technical_lead,
            resource_status: req.body.resource_status,
            gender: req.body.gender,
            employee_id: req.body.employee_id,
            global_id: req.body.global_id,
            skill: req.body.skill,
            technology: req.body.technology,
            bu: req.body.bu,
            resource_type: req.body.resource_type,
            grade: req.body.grade,
            pyramid: req.body.pyramid,
            base_location: req.body.base_location,
            anchor_location: req.body.anchor_location,
            sso_id: req.body.sso_id,
            cg_email: req.body.cg_email,
            axa_email: req.body.axa_email,
            cg_start_date: req.body.cg_start_date,
            axa_start_date: req.body.axa_start_date,
            axa_billing_date: req.body.axa_billing_date,
            axa_contract_renewal: req.body.axa_contract_renewal,
            plan_view_setup: req.body.plan_view_setup,
            current_squad: req.body.current_squad,
            address: req.body.address,
            phone_number: req.body.phone_number,
            alternate_phone_number: req.body.alternate_phone_number,
            user_id: req.body.user_id,
            project_code: req.body.project_code,
            remote_desktop: req.body.remote_desktop,
            onboarding_ticket: req.body.onboarding_ticket,
            offboarding_ticket: req.body.offboarding_ticket,
            release_date: req.body.release_date,
            resigned: req.body.resigned,
            comments: req.body.comments   
        })

        const createData = await detail.save();

        if(createData){
            res.send(createData)
        }
    } catch(err){
        console.log(err)
    }
}

const updateDetail = async (req, res) =>{
    try{
        let detail = await dataModel.findByIdAndUpdate(req.params.id, req.body)

        if(detail){
            res.send("Updated Successfully")
        }
    } catch(err){
        console.log(err)
    }
}

const deleteDetail = async(req, res) => {
    try{
        let detail = await dataModel.findByIdAndDelete(req.params.id)
        if(detail) {
            res.send("Item deleted Successfully")
        }
    } catch(e) {
        console.log(e)
    }
}

module.exports = {getDetails, getDetail, createDetail, updateDetail, deleteDetail}