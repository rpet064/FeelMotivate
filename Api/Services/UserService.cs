namespace WebApi.Services;

using AutoMapper;
using WebApi.Entities;
using WebApi.Helpers;
using WebApi.Models.Notes;

public interface INoteService
{
    IEnumerable<Note> GetAll();
    Note GetById(int id);
    void Create(CreateRequest model);
    void Update(int id, UpdateRequest model);
    void Delete(int id);
}

public class NoteService : INoteService
{
    private DataContext _context;
    private readonly IMapper _mapper;

    public NoteService(
        DataContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public IEnumerable<Note> GetAll()
    {
        return _context.Notes;
    }

    public Note GetById(int id)
    {
        return GetNote(id);
    }

    public void Create(CreateRequest model)
    {
        // map model to new user object
        var note = _mapper.Map<Note>(model);
        // save user
        _context.Notes.Add(note);
        _context.SaveChanges();
    }

    public void Update(int id, UpdateRequest model)
    {
        var note = GetNote(id);

        // copy model to user and save
        _mapper.Map(model, note);
        _context.Notes.Update(note);
        _context.SaveChanges();
    }

    public void Delete(int id)
    {
        var user = GetNote(id);
        _context.Notes.Remove(user);
        _context.SaveChanges();
    }

    // helper methods

    private Note GetNote(int id)
    {
        var note = _context.Notes.Find(id);
        if (note == null) throw new KeyNotFoundException("Note not found");
        return note;
    }
}