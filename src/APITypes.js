/**
 * A type that describes a project object.
 *
 * @typedef { Object } Project An object that defines a project.
 * @property { String } url API URL of the project.
 * @property { String } name Name of a project.
 * @property { String[] } buildings List of URLs of buildings of this project.
 * @property { String } country Country which project belongs to.
 * @property { String } description Description of project.
 * @property { String } stage Stage of this project.
 * @property { String } slug Slug that is related to the project. Just sluggified name.
 */

/**
 * A type that describes a building object of some project.
 *
 * @typedef { Object } Building An object that defines a building of a project.
 * @property { String } url API URL of the building.
 * @property { String } kks KKS-code of the building. Unique code which is used in nuclear power plants design.
 * For a building, it should has format of '[1-9][0-9]U[A-Z][A-Z]', like '10UQQ' or '91USY'.
 * @property { String } name Name of a building. Official name which is used in documentation.
 * @property { String } project API URL to a project that this building is related to.
 * @property { String[] } systems List of API URLs of all systems which are related to the building.
 * @property { String } model API URL of a model of the building.
 * @property { String } slug Slug that is related to the building. Usually just a lower-case KKS-code of the building.
 */

/**
 * A type that describes a model of a building. Contains files, viewpoints, and so on.
 *
 * @typedef { Object } Model A model of the building.
 * @property { String } url API URL of the model.
 * @property { String } pk Primary key of the model in database.
 * @property { Building } building Building to which this model belongs.
 * @property { String|Object } nwd API URL to an NWD file of the model. Can be null.
 * @property { String|Object } gltf API URL to an glTF file of the model. Can be null.
 * @property { String[] } view_points List of API URLs of view points that are related to the model.
 */

/**
 * A type that describes a view point inside specific model that is used by the API.
 *
 * @typedef { Object } ViewPoint A view point inside a model.
 * @property { String } pk Primary key of a view point.
 * @property { String } url API URL of the view point.
 * @property { String } viewer_url URL that opens the view point in the app.
 * @property { Number[] } position Global position of a view point in NavisWorks coordinate system in format [x, y, z].
 * Note that it is different from coordinate system that Three.js uses.
 * @property { Number[] } quaternion Rotation quaternion that represents rotation of view direction of this view
 * point in NavisWorks coordinate system in format [a, b, c, d]. Note that it is different from quaternions used in
 * Three.js.
 * @property { Number } fov Field of view in angles, from 0.1 to 180.
 * @property { String } description A name of view point, but it serves more as a description of in since it is the
 * only way to describe it in NavisWorks.
 * @property { Number|Object } distance_to_target Distance to controls target. In simple words, it is a point that the
 * view will turn around. Can be null.
 * @property { Boolean[] } clip_constants_status An array with statuses of clipping planes, true-enabled,
 * false-disabled. Format: [Up, Down, Front, Back, Left, Back].
 * @property { Number[] } clip_constants An array with global distances to each clipping plane.
 * Format: [Up, Down, Front, Back, Left, Back].
 * @property { String } creation_time A date string of the view point creation time.
 * @property { String } model API URL of a model that this view point belongs to.
 * @property { Note[] } notes An array with notes that attached to this view point.
 * @property { String } remark API URL of an attached remark.
 */

/**
 * A type that describes a note object that is used by the API.
 *
 * @typedef { Object } Note Note inside a model.
 * @property { String } url API URL of the note.
 * @property { String } text Text of this note.
 * @property { Number[] } position Position of a note in Three.js coordinate system. Format: [x, y, z].
 * @property { String } view_point API URL of a view point the note is attached to.
 */

/**
 * A type that describes a remark object that is used by the API.
 *
 * @typedef { Object } Remark Remark to a view point.
 * @property { Number } pk Primary key of a remark.
 * @property { String } url API URL of the remark.
 * @property { String } view_point API URL if a view point that this remark is attached to.
 * @property { String } description Text of this remark.
 * @property { String } speciality A speciality that this remark was made to.
 * @property { String } reviewer A person that made this remark.
 * @property { String } responsible_person A person that is responsible for this remark.
 * @property { String } creation_time Date of creation.
 * @property { String } deadline Deadline of the remark.
 * @property { String } status Status of the remark.
 * @property { String } comment A comment to the remark.
 */