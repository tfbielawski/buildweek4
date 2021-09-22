const itemRouter = require("express").Router();
const Items = require('./items-model');

itemRouter.get("/", async (req, res, next) => {
    try{
        const getItem = await Items.get()
        res.status(200).json(getItem)
    }
    catch(err){next(err)}
})

itemRouter.get("/:id",  async (req, res, next) => {
    try{
        const getItemById = await Items.getById(req.params.id, req.body)
        res.status(200).json(getItemById)
    }
    catch(err){next(err)}
})

itemRouter.put("/:id", async (req, res, next) => {
    try{
        const updateItem = await Items.update(req.params.id, req.body)
        res.status(200).json({updateItem, message: "item updated"})
    }
    catch(err){next(err)}
})

// itemRouter.post("/",  (req, res, next) => {
//     try{
//         const newItem = await Items.insert(req.body)
//         res.status(200).json({newItem, message: "item created"})
//     }
//     catch(err){next(err)}
//     // const newItem = req.body
//     // Items.insert(newItem)
//     //     .then(thingy => {
//     //         res.status(201).json({ message: "item created"})
//     //     })
//     //     .catch(next())
// })

itemRouter.post('/',  (req, res, next) => {
    const newItem = req.body
    Items.insert(newItem)
        .then(item => {
            res.status(201).json({ message: `You have successfully created the event: ${item.title}`, item})
        })
        .catch(next)
})

itemRouter.delete("/:id", async (req, res, next) => {
    try{
        const removeItem = await Items.remove(req.params.id, req.body)
        res.status(200).json({removeItem, message: "item deleted"})
    }
    catch(err){next(err)}
})

module.exports = itemRouter;
