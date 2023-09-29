const z = require('zod');

const movieSchema = z.object({
    title: z.string({
        invalid_type_error: 'Title must be String',
        required_error: 'Movie Title is required'
    }),
    year: z.number().min(1900).max(2024).int(),
    director: z.string(),
    duration: z.number().positive().int(),
    poster: z.string().url({
        message: 'POSTER must be a valid URL'
    }),
    genre: z.array(
        z.enum(['Action','Adventure','Terror','Comedy','Drama','Romance','Sci-Fi','Triller','Fantasy','Horror','Crime']),
        {
            required_error: "Movie Genre is Required",
            invalid_type_error: "Mamadas Lleve sus Mamadaaaaaaaaaaaaaas"
        }
    ),
    rate: z.number().min(0).max(10).default(0),
})


function validateMovie(object){
    return movieSchema.safeParse(object);
}

function validatePartialMovie(input){
    return movieSchema.partial().safeParse(input);
}

module.exports = {
    validateMovie,
    validatePartialMovie
}