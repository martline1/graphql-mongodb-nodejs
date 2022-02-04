/**
 * Creates a custom lookup aggregation to simulate mongoose's populate function
 *
 * @author Alcalá León Yael Mártin A. <yael.alcalla@gmail.com>
 */
 const lookup = (from: string, localField: string, as: string = localField): any[] => [
	{
		$lookup : {
			from,
			localField,
			foreignField : "_id",
			as,
		},
	},
	{
		$addFields : {
			[as] : {
				$arrayElemAt : [ "$" + as, 0 ],
			},
		},
	},
];

export default lookup;
