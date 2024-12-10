```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "relatedDocuments",
    },
  },
  {
    $unwind: "$relatedDocuments",
  },
  {
    $group: {
      _id: "$_id",
      relatedData: {
        $push: "$relatedDocuments.someField",
      },
    },
  },
];

Await db.collection('collectionA').aggregate(pipeline);
```